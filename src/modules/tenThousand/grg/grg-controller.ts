import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grg")
export default class GrgController {
  @operation({
    summary: "Get Grg",
  })
  @get()
  static getGrg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grg",
  })
  @post("{id}")
  static createGrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
