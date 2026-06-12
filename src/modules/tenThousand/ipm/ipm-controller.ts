import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipm")
export default class IpmController {
  @operation({
    summary: "Get Ipm",
  })
  @get()
  static getIpm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipm",
  })
  @post("{id}")
  static createIpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
