import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuc")
export default class KucController {
  @operation({
    summary: "Get Kuc",
  })
  @get()
  static getKuc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kuc",
  })
  @post("{id}")
  static createKuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
