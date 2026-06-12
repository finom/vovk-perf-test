import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyb")
export default class EybController {
  @operation({
    summary: "Get Eyb",
  })
  @get()
  static getEyb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyb",
  })
  @post("{id}")
  static createEyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
