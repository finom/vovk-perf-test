import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czk")
export default class CzkController {
  @operation({
    summary: "Get Czk",
  })
  @get()
  static getCzk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czk",
  })
  @post("{id}")
  static createCzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
