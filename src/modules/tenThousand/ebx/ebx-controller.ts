import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebx")
export default class EbxController {
  @operation({
    summary: "Get Ebx",
  })
  @get()
  static getEbx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebx",
  })
  @post("{id}")
  static createEbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
