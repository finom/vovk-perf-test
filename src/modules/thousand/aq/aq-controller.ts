import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aq")
export default class AqController {
  @operation({
    summary: "Get Aq",
  })
  @get()
  static getAq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aq",
  })
  @post("{id}")
  static createAq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
