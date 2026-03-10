import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ann")
export default class AnnController {
  @operation({
    summary: "Get Ann",
  })
  @get()
  static getAnn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ann",
  })
  @post("{id}")
  static createAnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
