import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjk")
export default class GjkController {
  @operation({
    summary: "Get Gjk",
  })
  @get()
  static getGjk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjk",
  })
  @post("{id}")
  static createGjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
