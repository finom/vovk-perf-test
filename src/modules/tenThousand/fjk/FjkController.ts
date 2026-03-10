import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjk")
export default class FjkController {
  @operation({
    summary: "Get Fjk",
  })
  @get()
  static getFjk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fjk",
  })
  @post("{id}")
  static createFjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
