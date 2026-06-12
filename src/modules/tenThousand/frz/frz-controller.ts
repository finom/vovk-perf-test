import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frz")
export default class FrzController {
  @operation({
    summary: "Get Frz",
  })
  @get()
  static getFrz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frz",
  })
  @post("{id}")
  static createFrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
