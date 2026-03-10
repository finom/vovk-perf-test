import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnm")
export default class HnmController {
  @operation({
    summary: "Get Hnm",
  })
  @get()
  static getHnm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnm",
  })
  @post("{id}")
  static createHnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
