import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ioj")
export default class IojController {
  @operation({
    summary: "Get Ioj",
  })
  @get()
  static getIoj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ioj",
  })
  @post("{id}")
  static createIoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
