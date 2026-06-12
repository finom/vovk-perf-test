import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gi")
export default class GiController {
  @operation({
    summary: "Get Gi",
  })
  @get()
  static getGi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gi",
  })
  @post("{id}")
  static createGi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
