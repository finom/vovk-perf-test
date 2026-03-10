import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzj")
export default class DzjController {
  @operation({
    summary: "Get Dzj",
  })
  @get()
  static getDzj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzj",
  })
  @post("{id}")
  static createDzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
