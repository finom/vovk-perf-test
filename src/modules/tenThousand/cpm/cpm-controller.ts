import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpm")
export default class CpmController {
  @operation({
    summary: "Get Cpm",
  })
  @get()
  static getCpm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpm",
  })
  @post("{id}")
  static createCpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
