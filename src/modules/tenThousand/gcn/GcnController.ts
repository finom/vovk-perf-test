import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcn")
export default class GcnController {
  @operation({
    summary: "Get Gcn",
  })
  @get()
  static getGcn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gcn",
  })
  @post("{id}")
  static createGcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
