import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("leg")
export default class LegController {
  @operation({
    summary: "Get Leg",
  })
  @get()
  static getLeg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Leg",
  })
  @post("{id}")
  static createLeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
