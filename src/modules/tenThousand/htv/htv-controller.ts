import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htv")
export default class HtvController {
  @operation({
    summary: "Get Htv",
  })
  @get()
  static getHtv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Htv",
  })
  @post("{id}")
  static createHtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
