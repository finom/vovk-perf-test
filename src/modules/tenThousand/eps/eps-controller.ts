import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eps")
export default class EpsController {
  @operation({
    summary: "Get Eps",
  })
  @get()
  static getEps = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eps",
  })
  @post("{id}")
  static createEps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
