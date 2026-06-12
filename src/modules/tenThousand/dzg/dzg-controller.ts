import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzg")
export default class DzgController {
  @operation({
    summary: "Get Dzg",
  })
  @get()
  static getDzg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzg",
  })
  @post("{id}")
  static createDzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
