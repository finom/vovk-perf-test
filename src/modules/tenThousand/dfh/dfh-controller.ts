import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfh")
export default class DfhController {
  @operation({
    summary: "Get Dfh",
  })
  @get()
  static getDfh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfh",
  })
  @post("{id}")
  static createDfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
