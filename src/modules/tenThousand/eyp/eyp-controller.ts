import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyp")
export default class EypController {
  @operation({
    summary: "Get Eyp",
  })
  @get()
  static getEyp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyp",
  })
  @post("{id}")
  static createEyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
