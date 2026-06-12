import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abn")
export default class AbnController {
  @operation({
    summary: "Get Abn",
  })
  @get()
  static getAbn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Abn",
  })
  @post("{id}")
  static createAbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
