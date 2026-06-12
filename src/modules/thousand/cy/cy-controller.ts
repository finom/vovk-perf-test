import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cy")
export default class CyController {
  @operation({
    summary: "Get Cy",
  })
  @get()
  static getCy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cy",
  })
  @post("{id}")
  static createCy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
