import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyd")
export default class HydController {
  @operation({
    summary: "Get Hyd",
  })
  @get()
  static getHyd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyd",
  })
  @post("{id}")
  static createHyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
