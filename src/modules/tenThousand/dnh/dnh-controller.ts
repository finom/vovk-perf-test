import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnh")
export default class DnhController {
  @operation({
    summary: "Get Dnh",
  })
  @get()
  static getDnh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnh",
  })
  @post("{id}")
  static createDnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
