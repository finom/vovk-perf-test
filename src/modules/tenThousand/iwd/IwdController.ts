import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwd")
export default class IwdController {
  @operation({
    summary: "Get Iwd",
  })
  @get()
  static getIwd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iwd",
  })
  @post("{id}")
  static createIwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
