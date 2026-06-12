import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agv")
export default class AgvController {
  @operation({
    summary: "Get Agv",
  })
  @get()
  static getAgv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Agv",
  })
  @post("{id}")
  static createAgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
