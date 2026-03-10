import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lag")
export default class LagController {
  @operation({
    summary: "Get Lag",
  })
  @get()
  static getLag = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lag",
  })
  @post("{id}")
  static createLag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
