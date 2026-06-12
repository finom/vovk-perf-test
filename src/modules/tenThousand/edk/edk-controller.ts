import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edk")
export default class EdkController {
  @operation({
    summary: "Get Edk",
  })
  @get()
  static getEdk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edk",
  })
  @post("{id}")
  static createEdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
