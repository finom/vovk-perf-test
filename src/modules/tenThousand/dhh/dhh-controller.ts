import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhh")
export default class DhhController {
  @operation({
    summary: "Get Dhh",
  })
  @get()
  static getDhh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhh",
  })
  @post("{id}")
  static createDhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
