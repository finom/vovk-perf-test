import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abe")
export default class AbeController {
  @operation({
    summary: "Get Abe",
  })
  @get()
  static getAbe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Abe",
  })
  @post("{id}")
  static createAbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
