import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("heq")
export default class HeqController {
  @operation({
    summary: "Get Heq",
  })
  @get()
  static getHeq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Heq",
  })
  @post("{id}")
  static createHeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
