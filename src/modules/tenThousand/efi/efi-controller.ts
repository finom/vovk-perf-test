import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efi")
export default class EfiController {
  @operation({
    summary: "Get Efi",
  })
  @get()
  static getEfi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efi",
  })
  @post("{id}")
  static createEfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
