import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuc")
export default class CucController {
  @operation({
    summary: "Get Cuc",
  })
  @get()
  static getCuc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cuc",
  })
  @post("{id}")
  static createCuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
