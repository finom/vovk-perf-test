import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dij")
export default class DijController {
  @operation({
    summary: "Get Dij",
  })
  @get()
  static getDij = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dij",
  })
  @post("{id}")
  static createDij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
