import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmr")
export default class GmrController {
  @operation({
    summary: "Get Gmr",
  })
  @get()
  static getGmr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmr",
  })
  @post("{id}")
  static createGmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
