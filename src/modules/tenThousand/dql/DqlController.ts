import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dql")
export default class DqlController {
  @operation({
    summary: "Get Dql",
  })
  @get()
  static getDql = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dql",
  })
  @post("{id}")
  static createDql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
