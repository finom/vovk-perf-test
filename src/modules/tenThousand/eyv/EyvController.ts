import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyv")
export default class EyvController {
  @operation({
    summary: "Get Eyv",
  })
  @get()
  static getEyv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyv",
  })
  @post("{id}")
  static createEyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
