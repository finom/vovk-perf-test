import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frk")
export default class FrkController {
  @operation({
    summary: "Get Frk",
  })
  @get()
  static getFrk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frk",
  })
  @post("{id}")
  static createFrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
