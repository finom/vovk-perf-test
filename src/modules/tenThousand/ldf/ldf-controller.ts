import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldf")
export default class LdfController {
  @operation({
    summary: "Get Ldf",
  })
  @get()
  static getLdf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldf",
  })
  @post("{id}")
  static createLdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
