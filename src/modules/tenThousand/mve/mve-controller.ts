import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mve")
export default class MveController {
  @operation({
    summary: "Get Mve",
  })
  @get()
  static getMve = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mve",
  })
  @post("{id}")
  static createMve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
