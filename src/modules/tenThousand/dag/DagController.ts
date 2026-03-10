import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dag")
export default class DagController {
  @operation({
    summary: "Get Dag",
  })
  @get()
  static getDag = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dag",
  })
  @post("{id}")
  static createDag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
