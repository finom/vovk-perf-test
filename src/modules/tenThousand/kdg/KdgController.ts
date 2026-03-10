import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdg")
export default class KdgController {
  @operation({
    summary: "Get Kdg",
  })
  @get()
  static getKdg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdg",
  })
  @post("{id}")
  static createKdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
