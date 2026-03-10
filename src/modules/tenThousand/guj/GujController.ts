import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guj")
export default class GujController {
  @operation({
    summary: "Get Guj",
  })
  @get()
  static getGuj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Guj",
  })
  @post("{id}")
  static createGuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
