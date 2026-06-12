import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chy")
export default class ChyController {
  @operation({
    summary: "Get Chy",
  })
  @get()
  static getChy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chy",
  })
  @post("{id}")
  static createChy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
