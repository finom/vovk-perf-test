import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ay")
export default class AyController {
  @operation({
    summary: "Get Ay",
  })
  @get()
  static getAy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ay",
  })
  @post("{id}")
  static createAy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
