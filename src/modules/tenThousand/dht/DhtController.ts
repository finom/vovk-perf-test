import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dht")
export default class DhtController {
  @operation({
    summary: "Get Dht",
  })
  @get()
  static getDht = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dht",
  })
  @post("{id}")
  static createDht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
