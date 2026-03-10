import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnv")
export default class GnvController {
  @operation({
    summary: "Get Gnv",
  })
  @get()
  static getGnv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gnv",
  })
  @post("{id}")
  static createGnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
