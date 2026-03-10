import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyf")
export default class EyfController {
  @operation({
    summary: "Get Eyf",
  })
  @get()
  static getEyf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyf",
  })
  @post("{id}")
  static createEyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
