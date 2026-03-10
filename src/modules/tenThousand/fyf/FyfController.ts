import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyf")
export default class FyfController {
  @operation({
    summary: "Get Fyf",
  })
  @get()
  static getFyf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fyf",
  })
  @post("{id}")
  static createFyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
