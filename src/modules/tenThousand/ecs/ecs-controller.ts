import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecs")
export default class EcsController {
  @operation({
    summary: "Get Ecs",
  })
  @get()
  static getEcs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecs",
  })
  @post("{id}")
  static createEcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
