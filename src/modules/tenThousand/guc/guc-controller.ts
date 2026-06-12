import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guc")
export default class GucController {
  @operation({
    summary: "Get Guc",
  })
  @get()
  static getGuc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Guc",
  })
  @post("{id}")
  static createGuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
