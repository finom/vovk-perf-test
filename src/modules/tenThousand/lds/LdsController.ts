import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lds")
export default class LdsController {
  @operation({
    summary: "Get Lds",
  })
  @get()
  static getLds = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lds",
  })
  @post("{id}")
  static createLds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
