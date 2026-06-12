import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afw")
export default class AfwController {
  @operation({
    summary: "Get Afw",
  })
  @get()
  static getAfw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afw",
  })
  @post("{id}")
  static createAfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
